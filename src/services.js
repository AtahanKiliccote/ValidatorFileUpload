import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: 'us-west-2:f923ab14-a6aa-4792-8a21-71b5532896f1',
     region: 'us-west-2',
     userPoolId: 'us-west-2_JFo5xm09s',
     userPoolWebClientId: '7jjflvgosd7a18ipkph1ho8epm',
    },
  Storage: { 
     bucket: 'arn:aws:s3:::validator-bucket-amplify',
     region: 'us-west-2',
     identityPoolId: 'us-west-2:f923ab14-a6aa-4792-8a21-71b5532896f1'
    }
  }
 );
} 
//Configure Storage with S3 bucket information
export function SetS3Config(bucket, level){
    Storage.configure({ 
           bucket: 'arn:aws:s3:::validator-bucket-amplify',
           level: level,
           region: 'us-west-2',  
           identityPoolId: 'us-west-2:f923ab14-a6aa-4792-8a21-71b5532896f1'
        });
 }