import React, {useState} from 'react';
import UploadImageContainer from './Containers/UploadImageContainer/UploadImageContainer'
import VerifyImageContainer from './Containers/VerifyImageContainer/VerifyImageContainer'

import './App.css';

function App() {


  return (
    <div className="App">
        <h1>Verificação de Assinatura web demo</h1>
        <UploadImageContainer imgLimit="3" submitButtonText="Upload" headingText="Upload 3 assinaturas do reais" allowMultiple={true}/>
        <VerifyImageContainer imgLimit="1" submitButtonText="Verify" headingText="Upload 1 assinatura para ser validada" allowMultiple={false}/>

    </div>
  );
}

export default App;
