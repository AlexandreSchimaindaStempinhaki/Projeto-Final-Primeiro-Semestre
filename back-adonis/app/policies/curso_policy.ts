import { BasePolicy } from '@adonisjs/bouncer'
import type { AuthorizerResponse } from '@adonisjs/bouncer/types'
import User from '#models/user'
import { permissions } from '../utils/permissoes.js'

export default class CursoPolicy extends BasePolicy {
  public list(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].listCurso
  }

  public view(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].viewCurso
  }

  public create(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].createCurso
  }

  public edit(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].editCurso
  }

  public delete(user: User | null): AuthorizerResponse {
    if (!user) return false
    return permissions[user.papel_id].deleteCurso
  }
}
