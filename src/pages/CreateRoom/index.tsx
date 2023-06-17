import React, { useEffect, useState } from 'react';
import { Button, Container } from './styles';
import { InputLabel } from '../../components/InputLabel';
import { useNavigate } from 'react-router-dom';
import { useProvider } from '../../context/provider';

export const CreateRoom = () => {
    const navigation = useNavigate();
    const { ipAddress, setIpAddress, room, setRoom } = useProvider();
    document.title = 'Server - MenuFooding';

    const handleText = () => {
        if (room && room?.length > 0 || ipAddress && ipAddress?.length > 0) {
            if (room && ipAddress) {
                localStorage.setItem('room', room);
                localStorage.setItem('ipAddress', ipAddress);
                navigation('/server', { state: { room, ipAddress } })
            }
        }
    }
    const handleBack = () => navigation('/');

    useEffect(() => {
        setRoom(localStorage.getItem('room')?.toString());
        setIpAddress(localStorage.getItem('ipAddress')?.toString());
    }, []);

    return (
        <Container>
            <InputLabel
                value={room}
                onChangeValue={(e) => setRoom(e.target.value)}
                text='Criar sala'
                placeholder='Digite o nome do menu'
            />
            <InputLabel
                value={ipAddress}
                onChangeValue={(e) => setIpAddress(e.target.value)}
                text='Endereço IP'
                placeholder='Digite o endereço IP'
            />
            <div style={{
            }}>
                <Button onClick={handleText} >Criar</Button>
                <Button style={{ marginLeft: 10 }} onClick={handleBack}>Voltar</Button>
            </div>
        </Container>
    );
}