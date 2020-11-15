import React, {useState} from 'react'
import firebase from 'firebase';

export default function App() {
    const [db, setDb] = useState(firebase.database());

    return (
        <h1>Wellcome to task meneger react.js</h1>
    )
}