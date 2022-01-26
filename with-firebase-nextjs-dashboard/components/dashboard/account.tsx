import React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Avatar, Box } from '@material-ui/core';
import { signOut, useSession } from 'next-auth/client';
import { makeStyles } from '@material-ui/core/styles';

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

function Account( owner ) {
    const session = useSession();
    console.log('session in avatar', session)
    const classes = useStyles();

  return (
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar alt={session[0].user.name} src={session[0].user.image} className="avatar" />
            <Typography
            color="textPrimary"
            variant="h5"
            >
            {owner.name ? owner.name : session[0].user.name}
            </Typography>
            <Typography
            color="textSecondary"
            variant="body2"
            >
             {owner.email ? owner.email : session[0].user.email}
            </Typography>
        </Box>
        <Divider />
        <List>
          {['Account', 'Create Event'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <button
          onClick={() => signOut({ callbackUrl: "http://localhost:3000/" })}
        >
          Sign out
        </button>
      </Drawer>
  );
}

export default Account;
