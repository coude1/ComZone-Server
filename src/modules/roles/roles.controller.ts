import { Body, Controller, Get, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { RoleDTO } from './dto/roleDTO';

@ApiTags('Role')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Get()
  getAllRoles() {
    return this.rolesService.getAll();
  }

  @Post()
  createNewRole(@Body() roleDTO: RoleDTO) {
    return this.rolesService.create(roleDTO);
  }
}
