import React from 'react'

export default class MainComponent extends React.PureComponent {
    render() {
        const style = {
            paper: {
            }
        };

        const {} = this.props;

        return (
            <div style={style.paper}>
                Main
            </div>
        );
    }
};