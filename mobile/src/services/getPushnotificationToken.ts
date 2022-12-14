import * as Notifications from 'expo-notifications'

export async function getPushNotificationTopken() {
  const { granted } = await Notifications.getPermissionsAsync()

  if (!granted) {
    await Notifications.requestPermissionsAsync()
  }

  if (granted) {
    const pushToken = await Notifications.getExpoPushTokenAsync()
    console.log(pushToken)

    return pushToken.data
  }
}
