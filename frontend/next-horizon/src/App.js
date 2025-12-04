import logo from './logo.svg';
import './App.css';
import Register from './component/registration/register';
import Signin from './component/registration/signin';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>

        <Content style={{ padding: "20px", backgroundColor: "#fff" , display: "flex" , alignItems: "center" ,justifyContent: "center" }}>
          <Routes>
            <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

