import React, { Component, createContext } from 'react';
const { ipcRenderer } = window.require("electron");

export let GlobalContext = createContext({ maliciousPacketCount: 0, totalPacketCount: 1, isScanning: false, reportData: [], startScanning: () => { }, stopScanning: () => { } });
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

            const percentage = (maliciousPacketCount / totalPacketCount * 100).toFixed(2);

            const element = (<tr>
                <td>{Date.now()}</td>
                <td>{maliciousPacketCount}</td>
                <td>{totalPacketCount - maliciousPacketCount}</td>
                <td>{percentage}</td>
            </tr>);
            let temp = [...this.state.reportData]
            temp.push(element);
            this.setState({
                maliciousPacketCount: maliciousPacketCount,
                totalPacketCount: totalPacketCount,
                reportData: temp,
            });
            if (percentage > 65) {
                this.stopScanning("detected");
            }
        })
    }
    startScanning = () => {
        ipcRenderer.send("run_script");
        this.setState({
            isScanning: true,
            maliciousPacketCount: 0,
            totalPacketCount: 1,
        })
    }
    stopScanning = (message) => {
        message = message!="" || message!=undefined ? message : "Scanning stopped by user";
        console.log(message);
        ipcRenderer.send("stopProcess", message);
        this.setState({
            isScanning: false,
        })
    }
    render() {
        return (
            <GlobalContext.Provider value={{ ...this.state, startScanning: this.startScanning, stopScanning: this.stopScanning }}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }

}
