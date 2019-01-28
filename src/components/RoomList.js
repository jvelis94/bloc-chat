import React, {Component} from 'react';
import './RoomList.css';


export class RoomList extends Component {
	constructor (props) {
		super (props); 
			this.state = { 
				rooms:[],
				newRoomName: '' 
			};

			this.roomsRef = this.props.firebase.database().ref("_rooms");	 
		}

	componentDidMount() {
    this.roomsRef.on('child_added', snapshot  => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) })
     });
   }

   createRoom(newRoomName) {
   	this.roomsRef.push({name: newRoomName});
   	this.setState({newRoomName: ""});
   }

   handleChange(e) {
    this.setState({newRoomName: e.target.value });
  }

   handleSubmit(e) {
   	e.preventDefault();
   	this.createRoom(this.state.newRoomName);
   }


	render() {
		return(
			<section>
				<section id='addroom'>
					<form onSubmit={ (e) => {this.handleSubmit(e)}}>
						<input type='text' placeholder='Desired Room Name' value={ this.state.newRoomName } onChange={ this.handleChange.bind(this) }/>
						<input type='submit' value='Add Room'/>
					</form>
				</section>
				<section id='chatroom'>
					{this.state.rooms.map(room =>
					<li key={room.key}>{room.name}</li> )}
				</section>
			</section>
			
		);
	}
}

export default RoomList;
