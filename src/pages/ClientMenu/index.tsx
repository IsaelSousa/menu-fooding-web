import React, { useEffect, useState } from 'react';
import { AsideMenu, Button, CardContainer, Container, Footer, InputIP, MenuContainer } from './styles';
import { StatusComponent } from '../../components/StatusComponent';
import { useNavigate } from 'react-router-dom';
import { CardRequest } from '../../components/CardRequest';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client';
import { IpRegex } from '../../utils/IpRegex';
import { v4 as uuidv4 } from 'uuid';
import { Menu } from '../../components/Menu';

export const ClientMenu = () => {
  const [menu, setMenu] = useState<string>('');
  const [activeStatus, setActiveStatus] = useState<boolean>(false);
  const [uuidSaved, setUuidSaved] = useState(uuidv4());

  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [informations, setInformations] = useState<string>('');
  const [socket, setSocket] = useState<Socket<any> | null>();
  const [ipAddress, setIpAddress] = useState<string>();
  const [roomList, setRoomList] = useState<Array<string>>();
  document.title = 'Client - MenuFooding';

  const [roomsListBool, setRoomsListBool] = useState<boolean>(true);

  const startServer = () => {
    if (ipAddress && IpRegex(ipAddress)) {
      const socket = io(`http://${ipAddress}`);
      localStorage.setItem('ipAddressClient', ipAddress);
      setSocket(socket);
      socket.emit('rooms');
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

  const handleEmitMsg = (nameMenu: string) => {
    socket?.emit('joinCreated', nameMenu);
    setRoomsListBool(false);
  }

  useEffect(() => {
    setIpAddress(localStorage.getItem('ipAddressClient')?.toString());
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        setActiveStatus(true);
      })

      socket.on('menu', (args: Array<string>) => {
        if (args && args.length > 0) {
          const data = args.reverse();
          const firstIndex = data[0];
          const secondaryIndex = data[0];
          setMenu(firstIndex[0]);
          setInformations(secondaryIndex[1]);
        }
      })

      socket.on('connect', () => {
        setActiveStatus(true);
      });

      socket.on('disconnect', () => {
        setActiveStatus(false);
        setSocket(null);
      });

      socket.on('rooms', (args: any) => {
        setRoomList(args);
      });

      socket.on('userJoined', (args: any) => {
        console.log("User connected, id: "+args);
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

      {
        !roomsListBool ?
          <CardContainer>
            <CardRequest
              user={user}
              setUser={setUser}
              text={text}
              setText={setText}
              onClick={handleSend}
            />
          </CardContainer>
          :
          <MenuContainer>
            {
              roomList?.map((vl, idx) => (
                <Menu
                key={idx}
                name={vl}
                onClick={() => handleEmitMsg(vl)}
                />
              ))
            }
          </MenuContainer>
      }


      <Footer>
        <StatusComponent active={activeStatus} />
        <InputIP
          placeholder='Digite o endereço IP'
          value={ipAddress}
          onChange={e => setIpAddress(e.target.value)}
        />
        {!activeStatus ? <Button onClick={startServer}>Start</Button> : <Button onClick={disconnectServer}>Desconectar</Button>}
        <Button onClick={toBack}>Voltar</Button>
      </Footer>
    </Container>
  )
}
