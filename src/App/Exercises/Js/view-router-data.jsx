import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbersTraining } from './JsNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayBasic } from './Exercise-js-arrays-basics//router-data';
import { blockRouterMetaData as blockRouterMetaDataArrayMethods } from './Exercise-js-arrays-methods/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionsBasic } from './Exercise-js-functions-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionsZadania } from './Exercise-js-functions-zadania/router-data';
import { blockRouterMetaData as HitTheMoleGame } from './HitTheMoleGame/router-data';
import { blockRouterMetaData as MemoryGame } from './MemoryGame/router-data';
import { blockRouterMetaData as OOP } from './Exercise-OOP//router-data';
import { blockRouterMetaData as Promises } from './Exercise-promises///router-data';
import { blockRouterMetaData as  AsyncandMe} from './AsyncAwaitMeandYou///router-data';
import { blockRouterMetaData as  PromiseUsage} from './PromiseUseage/router-data';
import { blockRouterMetaData as  PromiseUsageMethods} from './PromiseUsageMethods/router-data';
import { blockRouterMetaData as PromiseTraining } from './PromiseMethodsTraining/router-data';




export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsNumbersTraining,
  blockRouterMetaDataArrayBasic,
  blockRouterMetaDataArrayMethods,
  blockRouterMetaDataJsFunctionsBasic,
  blockRouterMetaDataJsFunctionsZadania,
  HitTheMoleGame,
  MemoryGame,
  OOP,
  Promises,
  AsyncandMe,
  PromiseUsage,
  PromiseUsageMethods,
  PromiseTraining,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
