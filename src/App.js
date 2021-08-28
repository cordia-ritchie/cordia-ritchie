import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Heroku from './Heroku'
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function App() {
  const access = localStorage.getItem('access')

  if (access) {
    return (
      <div className="App">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Heroku" key="1">
            <Heroku />
          </TabPane>
          <TabPane tab="Other" key="2">
            Nothing here yet...
          </TabPane>
        </Tabs>
      </div>
    );
  }

  return ("404 no page found")
}

export default App;
