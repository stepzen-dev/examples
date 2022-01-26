import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, CssBaseline, AppBar, Toolbar, List, Typography, Divider, ListItem, ListItemText, ListItemAvatar, Paper, Grid, ButtonBase } from '@material-ui/core';
import { getOwner } from "../../components/lib/api";
import { getSession, useSession } from 'next-auth/client';
import Account from '../../components/dashboard/account';
import router from 'next/router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  attendeelist: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  inline: {
    display: 'inline',
  },
}));

export default function Dashboard(owner) {
  const classes = useStyles();
  owner = owner.owner
  
  const session = useSession();
  // console.log('session', session)
  // console.log(owner.events)
  if (session) {
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Event Owner Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Account 
        owner={owner}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                {owner.events.map((event, index) => (
                  <>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://picsum.photos/200/300" />
            </ButtonBase>
          </Grid>
                    <Grid item xs={12} sm container key={index}>
                            <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                {event.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                {event.location}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                ID: {event.id}
                                </Typography>
                            </Grid>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1">Total Attendees: {event.attendees.filter(x => x).length}</Typography>
                            {event.attendees.map((attendee, index) => (
                            <List className={classes.inline} key={index}>
                              <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                  <Avatar alt="Remy Sharp" src="https://picsum.photos/id/1027/200/300" />
                                </ListItemAvatar>
                                <ListItemText
                                  primary={attendee.name}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        {attendee.email}
                                      </Typography>
                                      {` — ${attendee.address}`}
                                    </React.Fragment>
                                  }
                                />
                              </ListItem>
                              <Divider variant="inset" component="li" />
                            </List>
                            ))}
                            </Grid>
                        </Grid>
                        </Grid>
                      <hr/>
                  </>
                ))}
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
      </Grid>
      </main>
    </div>
      )
    } else {
      router.push("/login");
    }
    return <></>;
}

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);

      const owner = await getOwner(session.user.email);  

      if (!owner.name) {
        return{
          props: {},
          redirect: {
            destination: '/notauthorized',
            permanent: false
          }
        }
      } else {
        return {
          props: {
            owner: owner
          },
        };
      }
    
  }

Dashboard.auth = true;