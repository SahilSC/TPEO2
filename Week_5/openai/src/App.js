import logo from './logo.svg';
import './App.css';
import {Grid, List} from '@mui/material'
import {useState} from 'react'

function App() {
  const [message, setMessage] = useState([
    {
      message: "Hello, I'm chatGPT",
      sendTime: "just now",
      sender: "ChatGPT"
    }
  ])
  return (
    <Grid item xs={9}>
      <List>

      </List>
    </Grid>
  );
}

export default App;
