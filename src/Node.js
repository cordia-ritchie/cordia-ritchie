import React from "react";
import { message, Button, Alert } from "antd";
import classNames from 'classnames'

class Node extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOk: false,
            isLoading: false,
            oms: 0,
            seed: 0,
        };
    }

    async componentDidMount() {
        try {
            this.setState({
                isLoading: true,
            });
            const resRaw = await fetch(this.props.url, { mode: "cors" });
            console.log(resRaw)
            const res = await resRaw.json()
            this.setState({
                isOk: resRaw.status === 200,
                oms: res.oms,
                seed: res.seed,
            });
        } catch (e) {
            message.error(`${this.props.nodeNum} failed ${e}`);
        } finally {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        const { isLoading, isOk, oms, seed } = this.state;
        const { url, nodeNum } = this.props
        if (isLoading) {
            return (
                <div className="node node__loading">
                    <div className="node-num">
                        {nodeNum}
                    </div>
                    <div className="node-url">
                        {url}
                    </div>
                </div>
            );
        }
        return (
            <div className={classNames('node',
                isOk ? 'node__ok' : 'node__failed',
            )}>
                <div className="node-num">
                    {nodeNum}
                </div>
                <div className="node-url">
                    {url}
                </div>
                <div className="node-seed">
                    {seed}
                </div>
                <div className="node-oms">
                    {oms}
                </div>
            </div>
        );
    }
}

export default Node