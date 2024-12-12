import React from 'react';
import {TonConnectButton, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";
import './header.scss';

export const Header: React.FC = () => {
    const [tonConnectUi] = useTonConnectUI();
    const wallet = useTonWallet();

    return (
        <header className="header">
            <div>
                {wallet ? (
                    <button onClick={() => tonConnectUi.disconnect()} className="connect-button">
                        Отключить
                    </button>
                ) : (
                    <button onClick={() => tonConnectUi.openModal()} className="connect-button">
                        Подключить
                    </button>
                )}
            </div>
        </header>
    );
};
