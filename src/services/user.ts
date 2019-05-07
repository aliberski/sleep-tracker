import firebase from 'react-native-firebase';
import { get } from 'dot-prop';

export const getUid = (): string | null => {
  const userData = firebase.auth().currentUser;
  return userData && get(userData, '_user.uid', null);
};
