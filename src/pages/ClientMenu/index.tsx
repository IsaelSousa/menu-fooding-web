import React, { useEffect, useState } from 'react';
import { AsideMenu, Button, CardContainer, Container, Footer, InputIP } from './styles';
import { StatusComponent } from '../../components/StatusComponent';
import { useNavigate } from 'react-router-dom';
import { CardRequest } from '../../components/CardRequest';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { IpRegex } from '../../utils/IpRegex';
import { v4 as uuidv4 } from 'uuid';

export const ClientMenu = () => {
  const [menu, setMenu] = useState<string>('');
  const [ip, setIp] = useState('');
  const [activeStatus, setActiveStatus] = useState<boolean>(false);
  const [uuidSaved, setUuidSaved] = useState(uuidv4());

  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [informations, setInformations] = useState<string>('');
  const [socket, setSocket] = useState<Socket<any> | null>();
  document.title = 'Client - MenuFooding';

  const startServer = () => {
    if (IpRegex(ip)) {
      localStorage.setItem("ipaddress", ip);
      const socket = io(`http://${ip}`);
      setSocket(socket);
    }
  }

  const disconnectServer = () => {
    socket?.disconnect();
  }

  const navigation = useNavigate();

  const toBack = () => {
    navigation('/');
  }

  const handleSend = () => {
    socket?.emit('menu-user', [user, text, uuidSaved]);
  }

  useEffect(() => {
    var ipStorage = localStorage.getItem("ipaddress");
    if (ipStorage) {
      setIp(ipStorage);
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        setActiveStatus(true);
      })

      socket.on('menu', (args: any) => {
        setMenu(args[0]);
        setInformations(args[1]);
      })

      socket.on('connect', () => {
        setActiveStatus(true);
      });

      socket.on('disconnect', () => {
        setActiveStatus(false);
        setSocket(null);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [socket]);

  return (
    <Container>
      <AsideMenu>
        <h1>Cardápio</h1>
        <textarea
          value={menu}
          onChange={e => setMenu(e.target.value)}
          readOnly={true}
          placeholder='Cardápio'
        />
        <textarea
          value={informations}
          onChange={e => setInformations(e.target.value)}
          readOnly={true}
          placeholder='Informações'
        />
      </AsideMenu>

      <CardContainer>
        <CardRequest
          user={user}
          setUser={setUser}
          text={text}
          setText={setText}
          onClick={handleSend}
        />
      </CardContainer>

      <Footer>
        <StatusComponent active={activeStatus} />
        <InputIP
          placeholder='Digite o endereço IP'
          value={ip}
          onChange={(e: any) => setIp(e.target.value)}
        />
        {!activeStatus ? <Button onClick={startServer}>Start</Button> : <Button onClick={disconnectServer}>Desconectar</Button>}
        <Button onClick={toBack}>Voltar</Button>
      </Footer>
    </Container>
  )
}
