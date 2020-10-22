#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCustomResourcePracticeStack } from '../lib/cdk-custom-resource-practice-stack';

const app = new cdk.App();
new CdkCustomResourcePracticeStack(app, 'CdkCustomResourcePracticeStack');
