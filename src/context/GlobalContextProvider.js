import React, { Component, createContext } from 'react';
const { ipcRenderer } = window.require("electron");

export let GlobalContext = createContext();
export default class GlobalContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            maliciousPacketCount: 0,
            totalPacketCount: 1,
            isScanning: false,
            reportData: []
        }
    }
    componentDidMount() {
        ipcRenderer.on("packets", (event, maliciousPacketCount, totalPacketCount) => {
            const element = (<tr>
                <td>{Date.now()}</td>
                <td>{maliciousPacketCount}</td>
                <td>{totalPacketCount - maliciousPacketCount}</td>
                <td>{(maliciousPacketCount / totalPacketCount * 100).toFixed(2)}</td>
            </tr>);
            let temp = [...this.state.reportData]
            temp.push(element);
            this.setState({
                maliciousPacketCount: maliciousPacketCount,
                totalPacketCount: totalPacketCount,
                reportData: temp,
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
