import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class TopTenCrimesIntent {
  static intentName: string = 'topTenCrimes'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
    Client().get('crime').then(({ data }) => {
	callback({ data })
    })
  }
}

