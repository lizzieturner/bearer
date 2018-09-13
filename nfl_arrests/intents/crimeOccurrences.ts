import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'

export default class CrimeOccurrencesIntent {
  static intentName: string = 'crimeOccurrences'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
    Client().get('crime').then(({ data }) => {
	callback({ data })
    })
  }
}

