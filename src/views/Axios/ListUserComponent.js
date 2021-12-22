import axios from "axios";
import React from "react";

class ListUserComponent extends React.Component{

    state = {
        listUser: []
    }
    
    componentDidMount(){
        axios.get("https://reqres.in/api/users?page=1")
        .then(res =>{
            this.setState({
                listUser: res.data.data
            })
        })
    }

    render(){
        let {listUser} = this.state;
        return(
            <>
                <div>This is List Users Component</div>
                <div>List user:</div>
                {listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default ListUserComponent