import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerAccessEntity } from 'src/entities/partner-access.entity';
import { PartnerAdminEntity } from 'src/entities/partner-admin.entity';
import { PartnerEntity } from 'src/entities/partner.entity';
import { SubscriptionUserEntity } from 'src/entities/subscription-user.entity';
import { SubscriptionEntity } from 'src/entities/subscription.entity';
import { UserEntity } from 'src/entities/user.entity';
import { PartnerService } from 'src/partner/partner.service';
import { ZapierWebhookClient } from '../api/zapier/zapier-webhook-client';
import { FirebaseModule } from '../firebase/firebase.module';
import { PartnerAccessService } from '../partner-access/partner-access.service';
import { SubscriptionService } from '../subscription/subscription.service';
import { UserService } from '../user/user.service';
import { SubscriptionUserController } from './subscription-user.controller';
import { SubscriptionUserService } from './subscription-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubscriptionUserEntity,
      SubscriptionEntity,
      UserEntity,
      PartnerAccessEntity,
      PartnerEntity,
      PartnerAdminEntity,
    ]),
    FirebaseModule,
  ],
  controllers: [SubscriptionUserController],
  providers: [
    SubscriptionUserService,
    SubscriptionService,
    UserService,
    PartnerAccessService,
    ZapierWebhookClient,
    PartnerService,
  ],
})
export class SubscriptionUserModule {}
