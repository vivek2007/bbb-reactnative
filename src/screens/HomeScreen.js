import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import {ms, vs, ScaledSheet} from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/Ionicons';
// import {Navigation} from 'react-native-navigation';

import {Screen, Header, Button} from '../components/component';
import AppText from '../components/component/AppText';
import {fontSize, iconSize} from '../helpers/sizes';

import USER from '../assets/Portrait_Placeholder.png';

// import roomApi from '../room/room';
// import CirclesLoader from '../components/loading/loader/CirclesLoader';
// import TextLoader from '../components/loading/loader/TextLoader';
// import CommonStyle from '../style/style';
import Axios from 'axios';
// import encript from '../util/encript';
// import fxp from 'fast-xml-parser';

const {height, width} = Dimensions.get('window');

// const enterMeeting = (componentId, meeting, name) => {
// 	Navigation.push(componentId, {
// 		component: {
// 			name: 'LiveRoom',
// 			options: {
// 				topBar: {
// 					title: {
// 						text: meeting.meetingName
// 					}
// 				}
// 			},
// 			passProps: {
// 				meeting,
// 				name
// 			}
// 		},
// 	});
// }

class CreateRoomPage extends Component {
  constructor(props) {
    super(props);
    this.componentId = props.componentId;

    this.state = {
      showOption: false,
      loading: false,
      meetings: [],
      name: '',
    };
  }

  updateRoomData = async () => {
    this.setState({loading: true});
    let meetings = await roomApi.getAllMeetingInfos();
    console.log('meetings', meetings);
    this.setState({meetings: meetings, loading: false});
  };

  // componentDidMount() {
  //   this.updateRoomData();
  //   // console.log("meetings ===== " + JSON.stringify(meetings));
  // }

  componentDidMount() {
    console.log('this,pros', this.props.route.params);
  }

  renderLoading = () => {
    return (
      <View style={CommonStyle.center}>
        <CirclesLoader />
        <TextLoader text="Loading" />
      </View>
    );
  };

  render() {
    const {loading, meetings, showOption, name} = this.state;

    const {user} = this.props.route.params;

    return (
      <Screen>
        <Header
          onPressOption={() => this.setState({showOption: !showOption})}
        />
        <ScrollView>
          {loading && this.renderLoading()}
          <View style={styles.contentContainer}>
            <View style={styles.firstContainer}>
              <Button
                btnStyle={styles.btn}
                onPress={() => {}}
                title={'Start Meeting'}
              />

              <View style={styles.rightButtonContainer}>
                <View style={styles.rightButton}>
                  <Icons name="add" size={iconSize.regular} color={'#fff'} />
                </View>
                <AppText style={styles.btnText}>Create Room</AppText>
              </View>
            </View>
            <View style={styles.imgContainer}>
              {!user.image && <Image source={USER} style={styles.img} />}
              {user.image && (
                <Image source={{uri: user.image}} style={styles.img} />
              )}
            </View>
            <View
              style={{
                alignSelf: 'center',
                marginTop: ms(5),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppText style={styles.titleTxt}>{user.name || ''}</AppText>

              <View
                style={{
                  padding: ms(7),
                  backgroundColor: '#fff',
                  marginLeft: ms(5),
                  borderRadius: ms(5),
                }}>
                <AppText
                  style={{
                    color: '#222020',
                    fontSize: fontSize.mini,
                    fontWeight: 'bold',
                  }}>
                  Profile
                </AppText>
              </View>
            </View>
            <View style={{alignSelf: 'center', marginTop: ms(10)}}>
              <AppText style={{textAlign: 'center'}}>
                Your personal room
              </AppText>

              <AppText
                style={{
                  fontSize: fontSize.small,
                  textAlign: 'center',
                  marginTop: ms(15),
                }}>
                Meeting link
              </AppText>

              <Pressable style={styles.copyBtn}>
                <Icons
                  name="ios-copy-outline"
                  size={iconSize.small}
                  color={'#fff'}
                />
                <AppText style={{fontSize: fontSize.small}}>Copy</AppText>
              </Pressable>
            </View>
            {/* {!showOption && meetings.length > 0 && ( */}
            <View style={styles.inputContainer}>
              <>
                <TextInput
                  placeholder="Enter meeting name to join"
                  placeholderTextColor={'#fff'}
                  style={{
                    color: '#fff',
                  }}
                  value={name}
                  onChangeText={txt => this.setState({name: txt})}
                />
                <Pressable
                  onPress={
                    () => {}
                    // enterMeeting(
                    //   this.componentId,
                    //   meetings[meetings.length - 1],
                    //   name,
                    // )
                  }
                  style={styles.joinBtn}>
                  <AppText style={{fontSize: fontSize.small}}>Join</AppText>
                </Pressable>
              </>
            </View>
            {/* )} */}

            {/* {meetings.length === 0 && (
              <Text style={{color: '#fff', textAlign: 'center'}}>
                There is no active meetings
              </Text>
            )} */}
            {showOption && (
              <>
                <View style={styles.optionContainer}>
                  <View style={styles.option}>
                    <AppText>Members</AppText>
                    <Icons
                      name="people-sharp"
                      size={iconSize.xlarge}
                      color={'#fff'}
                    />
                  </View>
                  <View style={styles.option}>
                    <AppText>Recording</AppText>
                    <Icons
                      name="recording-outline"
                      size={iconSize.xlarge}
                      color={'#fff'}
                    />
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

export default CreateRoomPage;

const styles = ScaledSheet.create({
  contentContainer: {
    flex: 1,
  },
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: '15@ms',
  },
  btnText: {
    fontSize: fontSize.small,
  },
  rightButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '40%',
  },
  rightButton: {
    padding: ms(2),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    borderRadius: ms(7),
  },
  imgContainer: {
    height: '200@ms',
    width: '200@ms',
    borderRadius: '100@ms',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: '40@ms',
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  titleTxt: {
    textAlign: 'center',
    fontSize: fontSize.xxlarge,
  },
  copyBtn: {
    flexDirection: 'row',
    backgroundColor: '#5E5959',
    paddingVertical: ms(3),
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ms(5),
    justifyContent: 'space-evenly',
    borderColor: '#fff',
    alignSelf: 'center',
    paddingHorizontal: ms(10),
    marginTop: ms(10),
    width: '25%',
  },
  inputContainer: {
    marginTop: height * 0.18,
    width: '80%',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: ms(30),
    borderColor: '#fff',
    padding: ms(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  joinBtn: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    borderRadius: ms(25),
    paddingHorizontal: ms(15),
    paddingVertical: ms(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    backgroundColor: 'grey',
    paddingVertical: ms(10),
    width: '96%',
    alignSelf: 'center',
    borderRadius: ms(7),
    padding: ms(10),
    marginTop: ms(30),
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: ms(10),
  },
});

// import React, { Component } from 'react';
// import { SafeAreaView, Button, View, Alert, FlatList, StyleSheet, Text, StatusBar, TextInput } from 'react-native';
// import roomApi from '../../room/room';
// import { Navigation } from "react-native-navigation";
// /*import {CirclesLoader, PulseLoader, TextLoader, DotsLoader} from 'react-native-indicator';*/
// //import { aaaaaaa } from 'react-native-indicator';
// import CirclesLoader from '../loading/loader/CirclesLoader';
// import TextLoader from '../loading/loader/TextLoader';
// import CommonStyle from '../../style/style';
// import Axios from 'axios';
// import encript from '../../util/encript'
// import fxp from "fast-xml-parser";

// const enterMeeting = (componentId, meeting, name) => {
// 	Navigation.push(componentId, {
// 		component: {
// 			name: 'LiveRoom',
// 			options: {
// 				topBar: {
// 					title: {
// 						text: meeting.meetingName
// 					}
// 				}
// 			},
// 			passProps: {
// 				meeting,
// 				name
// 			}
// 		},
// 	});
// }

// export default class RoomList extends Component {
// 	static displayName = 'RoomList';
// 	constructor(props) {
// 		super(props);
// 		this.componentId = props.componentId;
// 		this.state = {
// 			meetings: [],
// 			isLoading: true,
// 			name: ""
// 		}
// 		// console.log("aaaaaaadd = " + aaaaaaa);
// 	}

// 	onClose = () => {
// 	};

// 	componentWillMount() {
// 	}

// 	componentWillUpdate() {

// 	}
// 	async updateRoomData() {
// 		this.setState({ isLoading: true })
// 		let meetings = await roomApi.getAllMeetingInfos();
// 		console.log("meetings", meetings)
// 		this.setState({ meetings: meetings, isLoading: false })
// 	}
// 	async componentDidMount() {
// 		this.updateRoomData();
// 		// console.log("meetings ===== " + JSON.stringify(meetings));
// 	}

// 	getMeetingInfo = async(id, meeting) => {

// 		console.log("meeting info id", id)
// 		console.log("meeting info meeting", meeting)

// 		let url = await encript(`https://meet-api.shareslate.com/bigbluebutton/api/getMeetingInfo?meetingID=${meeting.meetingID}&password=ap`)

// 			const res = await Axios.get(url)

// 			let data = fxp.parse(res.data)

// 			console.log("meeting info ", data)

// 			// http://meet-api.shareslate.com/bigbluebutton/api/join?meetingID=b0hbdpbgysbmwgl0qwq5tbnvpm0kj5pi1eqle9e7&fullName=Vrushabh&redirect=true&password=ap&checksum=7a38270eda8f0faa1de08f7b3f54547999c42990

// 	}

// 	 renderRoomList(meetings) {
// 		const Item = ({ meeting }) => (
// 			<View style={styles.item}>
// 				<Text style={styles.title}>{meeting.meetingName}</Text>
// 				<View style={{flexDirection: "column", justifyContent: 'space-evenly'}}>
// 				{/* <Button title='info' onPress={() => this.getMeetingInfo(this.componentId, meeting)} /> */}

// 				<Button
// 					onPress={() => { enterMeeting(this.componentId, meeting, this.state.name) }}
// 					title="Join"
// 					color="#841584"
// 					/>
// 					</View>

// 			</View>
// 		);

// 		const renderItem = ({ item }) => {
// 			return (
// 				<Item meeting={item} />
// 			)
// 		};
// 		return (
// 			<FlatList
// 				data={meetings}
// 				renderItem={renderItem}
// 				keyExtractor={item => item.id}
// 			/>
// 		)
// 	}

// 	renderLoading() {
// 		return (
// 			<View style={CommonStyle.center}>
// 				<CirclesLoader />
// 				<TextLoader text="Loading" />
// 			</View>
// 		);
// 	}

// 	render() {

// 		let meetings = this.state.meetings;
// 		let isLoading = this.state.isLoading;
// 		//console.log("meetings == " + JSON.stringify(meetings));
// 		return (
// 			<SafeAreaView style={styles.container}>
// 				<Button
// 					onPress={() => {
// 						this.updateRoomData();
// 					}}
// 					title="Refresh the room"
// 				/>

// <TextInput
// 				value={this.state.name}
// 				onChangeText={(text) => this.setState({name: text})}
// 				style={{borderWidth: 1, borderColor: "grey", marginVertical: 7, width: "90%", alignSelf: 'center'}}
// 				placeholder='Enter Your name'
// 			/>

// 				{isLoading && this.renderLoading()}
// 				{!isLoading && this.renderRoomList(meetings)}

// 			</SafeAreaView>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		backgroundColor: '#f9c2ff',
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 24,
// 	},
// });
