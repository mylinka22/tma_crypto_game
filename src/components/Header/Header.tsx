import React from 'react';
import { TonConnectButton, useTonConnectUI } from "@tonconnect/ui-react";
import './header.scss';

export const Header: React.FC = () => {
    const [tonConnectUi] = useTonConnectUI();

    return (
        <header className="header">
            <div>
                <button className="connect-button" onClick={() => tonConnectUi.openModal()}>
                    Подключиться
                </button>
            </div>
        </header>
    );
};
