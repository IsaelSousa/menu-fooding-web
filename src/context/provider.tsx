import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContextProps {
    children: React.ReactNode
}

type contextType = {
    ipAddress: string | undefined;
    setIpAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
    room: string | undefined;
    setRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Context = createContext<contextType>({} as contextType);

export const Provider = (props: ContextProps) => {
    const [ipAddress, setIpAddress] = useState<string>();
    const [room, setRoom] = useState<string>();

    const state = {
        ipAddress,
        room
    }

    const actions = {
        setIpAddress,
        setRoom
    }

    return (
        <Context.Provider value={{ ...state, ...actions }}>
            {props.children}
        </Context.Provider>
    )
}

export function useProvider(): contextType {
    return useContext(Context);
}