import React, { Component, createContext } from 'react';
const { ipcRenderer } = window.require("electron");

export let GlobalContext = createContext();
export default class GlobalContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            maliciousPacketCount: 0,
            totalPacketCount: 1,
            isScanning: false
        }
    }
    componentDidMount() {
        ipcRenderer.on("packets", (event, maliciousPacketCount, totalPacketCount) => {
            this.setState({
                maliciousPacketCount: maliciousPacketCount,
                totalPacketCount: totalPacketCount,
            })
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }

}
