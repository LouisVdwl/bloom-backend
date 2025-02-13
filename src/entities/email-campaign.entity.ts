import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { CAMPAIGN_TYPE } from '../utils/constants';
import { BaseBloomEntity } from './base.entity';

@Entity({ name: 'email_campaign' })
export class EmailCampaignEntity extends BaseBloomEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  campaignType: CAMPAIGN_TYPE;

  @Column()
  email: string;

  @Column({ type: 'timestamptz' })
  emailSentDateTime: Date;
}
