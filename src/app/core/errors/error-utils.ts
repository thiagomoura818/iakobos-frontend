import { HttpErrorResponse } from "@angular/common/http";
import { ApiError } from "../../models/api-error.model";

export function extractErrorMessage(error: HttpErrorResponse): string {
    
    if(error.status === 0)
        return 'Sem conexão com o servidor. Verifique sua internet';

    const body = error.error as ApiError;
    if(body?.errors?.length){
        return body.errors.join('; ');
    }

    switch (error.status) {
        case 401: return 'Sessão expirada. Faça login novamente.';
        case 403: return 'Você não tem permissão para esta ação.';
        case 404: return 'Recurso não encontrado.';
        case 500: return 'Erro interno do servidor.';
        default:  return 'Ocorreu um erro inesperado.';
    }
}