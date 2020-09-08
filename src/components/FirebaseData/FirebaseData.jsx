import React, { Fragment } from 'react'
import {db} from '../../utils/firebase-config'

import {Button} from '@material-ui/core'

const FirebaseData = () => {

    const getInfoUsers= async () =>{
        db.collection("users").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
    }


    return (
        <Fragment>
            <h1>Toroto Firebase</h1>
            <Button onClick={getInfoUsers}> Firebase</Button>
        </Fragment>
    )
}

export default FirebaseData