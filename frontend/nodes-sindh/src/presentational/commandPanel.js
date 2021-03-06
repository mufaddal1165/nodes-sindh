import React, { Component, Fragment } from 'react'
import { withStyles, Switch, FormControlLabel, TextField, Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        gridGap: '5px',
        justifyItems: 'center',
        marginBottom: 5
    }
})


class CommandPanel extends Component {

    state = {
        switch1: this.props.switch1,
        switch2: this.props.switch2,
        loadSwitch1: this.props.loadSwitch1,
        loadSwitch2: this.props.loadSwitch2,
        loadSwitch3: this.props.loadSwitch3,
        loadSwitch4: this.props.loadSwitch4,
        powerLimit1: this.props.powerLimit1,
        powerLimit2: this.props.powerLimit2,
        powerLimit3: this.props.powerLimit3,
        powerLimit4: this.props.powerLimit4


    }
    handleStatusChange = name => event => {
        this.setState({ [name]: event.target.checked ? 1 : 0 })
    }

    handlePowerLimitChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            this.setState({
                switch1: this.props.switch1,
                switch2: this.props.switch2,
                loadSwitch1: this.props.loadSwitch1,
                loadSwitch2: this.props.loadSwitch2,
                loadSwitch3: this.props.loadSwitch3,
                loadSwitch4: this.props.loadSwitch4,
                powerLimit1: this.props.powerLimit1,
                powerLimit2: this.props.powerLimit2,
                powerLimit3: this.props.powerLimit3,
                powerLimit4: this.props.powerLimit4
            })
        }
    }

    handleSubmit = () => {
        let command = `${this.state.switch1}|${this.state.switch2}|${this.state.powerLimit1}|${this.state.powerLimit2}|${this.state.loadSwitch1}|${this.state.loadSwitch2}|${this.state.loadSwitch3}|${this.state.loadSwitch4}`
        this.props.commandFunc(command, this.props.nodeId)
    }
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.root}>
                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Switch 1'
                        checked={this.state.switch1 === 1}
                        onChange={this.handleStatusChange('switch1')}
                        control={
                            <Switch />
                        } />

                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Switch 2'
                        checked={this.state.switch2 === 1}
                        onChange={this.handleStatusChange('switch2')}
                        control={
                            <Switch />
                        } />
                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Load Switch 1'
                        checked={this.state.loadSwitch1 === 1}
                        onChange={this.handleStatusChange('loadSwitch1')}
                        control={
                            <Switch />
                        } />

                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Load Switch 2'
                        checked={this.state.loadSwitch2 === 1}
                        onChange={this.handleStatusChange('loadSwitch2')}
                        control={
                            <Switch />
                        } />
                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Load Switch 3'
                        checked={this.state.loadSwitch3 === 1}
                        onChange={this.handleStatusChange('loadSwitch3')}
                        control={
                            <Switch />
                        } />

                    <FormControlLabel
                        root={classes.formControlLabel}
                        label='Load Switch 4'
                        checked={this.state.loadSwitch4 === 1}
                        onChange={this.handleStatusChange('loadSwitch4')}
                        control={
                            <Switch />
                        } />

                    <TextField
                        id="power-limit-1"
                        label="Power Limit 1"
                        value={this.state.powerLimit1}
                        onChange={this.handlePowerLimitChange('powerLimit1')}
                    />

                    <TextField
                        id="power-limit-2"
                        label="Power Limit 2"
                        value={this.state.powerLimit2}
                        onChange={this.handlePowerLimitChange('powerLimit2')}
                    />



                </div>
                <Button color='secondary' onClick={this.handleSubmit}>Submit</Button>

            </Fragment>

        )
    }
}

export default withStyles(styles)(CommandPanel)