import React, { useEffect, useRef, useState } from 'react';
import { AsideLeftMenu, AsideRightMenu, Button, CardContainer, Container, Footer, InputIP } from './styles';
import { StatusComponent } from '../../components/StatusComponent';
import { Card } from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import { Socket, io } from 'socket.io-client';
import { useProvider } from '../../context/provider';
import { toast } from 'react-toastify';

type Cards = {
  uuid: string;
  user: string;
  text: string;
}

export const ServerMenu = () => {
  const [activeStatus, setActiveStatus] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [informations, setInformations] = useState<string>('');
  const [socket, setSocket] = useState<Socket<any>>();
  const [cards, setCards] = useState<Array<Cards>>([]);
  const [cardsObject, setObjectCards] = useState<Cards>();
  const preRef = useRef<any>(null);

  const { ipAddress, room } = useProvider();
  const navigation = useNavigate();

  document.title = 'Server - MenuFooding';

  const updateItem = (card: Cards) => {
    setCards(prevItems => {
      return prevItems.map(item => {
        if (item.uuid === card.uuid) {
          return { ...item, user: card.user, text: card.text }
        }
        return item;
      })
    })
  }

  const inserItemIfNotExists = (newItem: Cards) => {
    if (!cards.find(item => item.uuid === newItem.uuid)) {
      setCards(previtems => [...previtems, { user: newItem.user, text: newItem.text, uuid: newItem.uuid }]);
    }
  }

  useEffect(() => {
    if (cardsObject) {
      updateItem(cardsObject);
      inserItemIfNotExists(cardsObject);
    }
  }, [cardsObject])

  useEffect(() => {
    if (socket) {

      socket.on('menu-user', (args: any) => {
        setObjectCards({ user: args[0], text: args[1], uuid: args[2] })
      });

      socket.on('connect', () => {
        setActiveStatus(true);
      })

      socket.on('disconnect', () => {
        setActiveStatus(false);
      });

      return () => {
        socket.disconnect();
        handleDisconnected();
      }
    }
  }, [socket])

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
      const socket = io(`http://${ipAddress}`);
      setSocket(socket);
      socket.emit('joinCreated', room);
      socket.emit('rooms', []);
      toast.success('Servidor iniciado.');
  }

  const handleDisconnected = () => {
    if (socket) {
      socket.disconnect();
      toast.success('Desconectado.');
    }
  }

  const handleClipboard = () => {
    if (preRef.current) {
      navigator.clipboard.writeText(preRef.current.innerText);
      toast.success('Pedidos copiados.');
    }
  }

  const handleSendMenu = () => {
    socket?.emit('menu', [text, informations]);
    toast.success('Cardápio enviado aos usuários.');
  }

  const toBack = () => {
    navigation('/');
  }

  const handleRemove = (uuid: string) => {
    setCards(cards.filter(item => item.uuid != uuid));
    toast.success('Pedido removido.');
  }

  return (
          <Container>
            <AsideLeftMenu>
              <h1>Cardápio</h1>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                readOnly={false}
                placeholder='Informe o cardápio'
              />
              <textarea
                value={informations}
                onChange={e => setInformations(e.target.value)}
                readOnly={false}
                placeholder='Informações'
              />
              <Button onClick={handleSendMenu}>Enviar cardápio</Button>
            </AsideLeftMenu>

            <CardContainer>
              {
                cards.map((vl, idx) => (
                  <Card key={vl.uuid} user={vl.user} text={vl.text} number={idx + 1} onClick={() => handleRemove(vl.uuid)} />
                ))
              }
            </CardContainer>

            <AsideRightMenu>
              <h1>Pedidos</h1>
              <pre style={{
                textAlign: 'left',
                background: '#FFF',
                height: '75%',
                overflowY: 'auto'
              }}
                ref={preRef}
              >
                {cards.map((vl, idx) => (
                  <div key={idx}>
                    <h3>Nome: {vl.user}</h3>
                    <strong>Pedido:</strong>
                    <p>{vl.text}</p>
                    <p> -------------------- </p>
                    <br />
                  </div>
                ))}
              </pre>
              <Button onClick={() => handleClipboard()}>Copiar</Button>
            </AsideRightMenu>

            <Footer>
              <StatusComponent active={activeStatus} />
              <InputIP value={ipAddress} />
              {
                !activeStatus ? <Button onClick={handleStart}>Start</Button> : <Button onClick={handleDisconnected}>Disconnect</Button>
              }
              <Button
                onClick={toBack}
              >Voltar</Button>
            </Footer>
          </Container>
  )
}
