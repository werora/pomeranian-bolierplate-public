import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as blockRouterMetaData120520231 } from './Exercise-example-12-05-2023/router-data';
import { blockRouterMetaData as blockRouterDataBoxModel} from './BoxModel/router-data'
import { blockRouterMetaData as blockRouterDataStandardTags} from './StandardTags//router-data'
import { blockRouterMetaData as CssAnimations} from './CssAnimations///router-data'
import { blockRouterMetaData as Animations} from './CssAnimations-cw1///router-data'
import { blockRouterMetaData as blockRouterMetaDataExerciseMultimedia} from './Exercise-multimedia////router-data'
import { blockRouterMetaData as blockRouterMetaDataExerciseImages} from './Exercise-images////router-data'
import { blockRouterMetaData as blockRouterMetaDataFloatsAndPositioning} from './FloatsAndPositioning////router-data'

export const blockRouterMetaData = [blockRouterMetaData121220231, blockRouterMetaData120520231, blockRouterDataBoxModel,
blockRouterDataStandardTags, CssAnimations, Animations, blockRouterMetaDataExerciseMultimedia, blockRouterMetaDataExerciseImages, blockRouterMetaDataFloatsAndPositioning];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
