import './App.css';
import './classWork/parentElement'
import ParentElement from './classWork/parentElement';
import LoaderImg from './homeWork/LoaderImg/LoaderImg'

function App() {
  return (
    <div>
      {/* <ParentElement></ParentElement> */}
      <LoaderImg src = 'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg'></LoaderImg>
      <LoaderImg src = 'https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507d95.jpg'></LoaderImg>
      <LoaderImg src = 'https://media.springernature.com/lw630/nature-cms/uploads/cms/pages/2913/top_item_image/cuttlefish-e8a66fd9700cda20a859da17e7ec5748.png'></LoaderImg>

    </div>
  );
}

export default App;