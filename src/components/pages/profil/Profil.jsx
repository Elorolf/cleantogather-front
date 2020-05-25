import React from 'react';
import EventModal from '../../common/modals/EventModal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done'

import '../home/Home.css'

class Profil extends React.Component {
    constructor (props) {
        super(props);
        this.state = {isEditable : false,
            user: {
                name: "Galaad",
                email: "galaad.moll@gmail.com",
                eventSubscribed: [
                    {
                        title: "Titre",
                        address: "13 Adresse idene ziudgshfil, PAis",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        startDateTime: "11 mai 2020 à 13:00"
                    },
                    {
                        id: 1,
                        title: "Titre",
                        address: "13 Adresse idene ziudgshfil, PAis",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        startDateTime: "11 mai 2020 à 13:00"
                    }
                ]
            },
            name: "Galaad",
            email: "galaad.moll@gmail.com"
        };

        this.setEditable = this.setEditable.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    setEditable(bool) {
        this.setState({isEditable: bool});
    }

    submitEdit() {
        let newUser = this.state.user;
        newUser.name = this.state.name;
        newUser.email = this.state.email;
        this.setState({user: newUser,
            isEditable: false});
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        let pseudo =(this.state.isEditable ?
            <TextField name="name" onChange={this.onChange} value={this.state.name}/> :
            <Typography variant="h6" display="inline">{this.state.user.name}</Typography>);

        let email =(this.state.isEditable ?
            <TextField name="email" onChange={this.onChange} value={this.state.email}/> :
            <Typography variant="h6" display="inline">{this.state.user.email}</Typography>);

        let editIcon = (this.state.isEditable ?
            //True
            <>
            <IconButton aria-label="edit" onClick={this.submitEdit}>
                <DoneIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={() => this.setEditable(false)}>
                <CloseIcon />
            </IconButton>
            </> :
            //False
            <IconButton aria-label="edit" onClick={() => this.setEditable(true)}>
                <EditIcon />
            </IconButton>);

        return (
            <Grid container justify="space-evenly">
                <Grid item xs={12} md={5} className="bigDiv">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <Grid container>
                            <Typography variant="h5" style={{flexGrow:1}}>Informations</Typography>
                            {editIcon}
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" display="inline" style={{flexGrow:1}}>Pseudo : &nbsp;</Typography>{pseudo}
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" display="inline">Email : &nbsp;</Typography>{email}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} className="bigDiv">
                    <Grid container direction="column" alignItems="center" spacing={3}>
                        <Grid item>
                            <Typography variant="h5" style={{flexGrow:1}}>Vos événements</Typography>
                        </Grid>
                        {this.state.user.eventSubscribed.map(event => (
                            <Grid item key={event.id}>
                                <EventModal event={event}>
                                <Grid justify="flex-start">
                                    <Typography variant="h6" display="block">{event.title}</Typography><br/>
                                    <Typography display="block">Le {event.startDateTime}</Typography>
                                </Grid>
                                </EventModal>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Profil;