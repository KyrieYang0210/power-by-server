import {
  Controller,
  Post,
  Body,
  ParseIntPipe,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from 'src/core/auth/auth.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entities/auth.entity';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() { email, password }: LoginDto) {
    return new AuthEntity(await this.authService.login(email, password));
  }

  @Get('/:id/permissions')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async findUserPermission(@Param('id', ParseIntPipe) id: number) {
    const user = await this.authService.findUserPermission(id);
    return {
      ...user,
      permissions: [
        'revenue.get',
        'themes.default.get',
        'themes.upload.post',
        'themes.apply.post',
        'themes.default.put',
        'themes.uuid.get',
        'customers.get',
        'forget-password.post',
        'reset-password.post',
        'users.sessions.fresh.post',
        'users.pk.get',
        'users.pk.put',
        'users.pk.patch',
        'users.pk.delete',
        'tenant_logs.get',
        'user.user_id.auth.get',
        'apps.app_id.auth.get',
        'apps.app_id.load.get',
        'apps.app_id.uninstall.get',
        'stores.get',
        'stores.post',
        'stores.pk.get',
        'stores.pk.change-plan.post',
        'stores.pk.pause.post',
        'stores.pk.destroy.post',
        'stores.statistics.get',
        'plan-payments.get',
        'plan-payments.statistics.get',
        'plan-changes.post',
        'plan-changes.get',
        'plans.get',
        'plans.post',
        'plans.pk.get',
        'plans.pk.put',
        'plans.pk.delete',
        'accounts.get',
        'accounts.post',
        'accounts.id.get',
        'accounts.id.patch',
        'accounts.id.put',
        'accounts.id.delete',
        'accounts.id.stores.get',
        'account_logs.get',
        'groups.get',
        'groups.post',
        'groups.pk.get',
        'groups.pk.put',
        'groups.pk.patch',
        'groups.pk.delete',
        'permissions.get',
        'permissions.post',
        'stats.get',
        'configs.key.patch',
        'users.get',
        'users.post',
        'user.sessions.post',
        'configs.key.get',
        'configs.key.put',
        'plans.pk.patch',
        'promotion-utilization.get',
        'customers.pk.get',
        'users.export.get',
        'stores.export.get',
        'store_logs.get',
        'store_logs.export.get',
        'system_logs.export.get',
        'plan-changes.export.get',
        'tenant_logs.export.get',
        'accounts.export.get',
        'accounts-importation.post',
        'email-templates.get',
        'email-templates.put',
        'products.get',
        'products.id.patch',
        'products.id.delete',
        'products-importation.post',
        'promotions.get',
        'promotions.post',
        'promotions.id.delete',
        'promotions.id.patch',
        'promotions.pushes.post',
        'products.export.get',
        'plan-payments.export.get',
        'categories.get',
        'provisioning-profiles.get',
        'provisioning-profiles.id.get',
        'provisioning-profiles.id.patch',
        'provisioning-profiles.id.delete',
        'themes.get',
        'master-store.currencies.get',
        'master-store.customer-groups.get',
        'master-store.countries.get',
        'master-store.brands.get',
        'media.post',
        'products.pull.post',
        'products.pushes.post',
        'provisioning-profiles.post',
        'promotions.pulls.post',
        'provisioning-profiles.apply.post',
        'promotion.duplicates.post',
        'promotions.id.get',
      ],
      groups: [],
    };
  }
}
