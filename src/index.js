import { Avatar, colors, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { black, white } from '@mui/material/colors'
import { height, width } from '@mui/system';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

class Left extends React.Component {
    render() {
        var style = { width: 150, height: 150 };
        return (
            <Box className='Left'>
                <Avatar sx={style} src='/wibu.png' className='Avatar'></Avatar>
                <Box bgcolor="black" className='contact'>
                    <Typography variant='h5'>CONTACT</Typography>
                </Box>
                <Box className='text'>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                </Box>
                <Box bgcolor="black" className='contact'>
                    <Typography variant='h5'>EDUCATION</Typography>
                </Box>
                <Box className='text'>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                </Box>
                <Box className='text'>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                    <Typography>
                        asd
                    </Typography>
                </Box>
                <Box bgcolor="black" className='contact'>
                    <Typography variant='h5'>SKILL</Typography>
                </Box>
                <Box className='List'>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box >

        )
    }

}
class Right extends React.Component {
    render() {
        return (
            <Box className='Right'>
                <Box className='banner'>
                    <Typography variant='h3'>
                        Lorem Ipsum
                    </Typography>
                    <Typography variant='h5'>
                        Lorem ipsum dolor sit amet.
                    </Typography>
                </Box>
                <Box className='Title'>
                    <Typography variant='h5'>PROFILE</Typography>
                </Box>
                <Box className='Text-Title'>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Box>
                <Box className='Title'>
                    <Typography variant='h5'>PROFESSTIONAL EXPERIENCE</Typography>
                </Box>
                <Box className='Title'>
                    <Typography variant='h6'>WRITE YOUR TITLE HERE</Typography>
                </Box>
                <Box className='Text-Title'>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Box>
                <Box className='Title'>
                    <Typography variant='h6'>WRITE YOUR TITLE HERE</Typography>
                </Box>
                <Box className='Text-Title'>
                    <Typography>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FiberManualRecordIcon></FiberManualRecordIcon>
                            </ListItemIcon>
                            <ListItemText>
                                asd
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>

            </Box>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Box className='App'>
                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 20 }} />
                <Left></Left>
                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 20 }} />
                <Right></Right>
                <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 20 }} />
            </Box>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);
