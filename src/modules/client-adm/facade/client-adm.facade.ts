import ClientAdmFacadeInterface, { AddClientFacadeInputDto, FindClientFacadeInputDto, FindClientFacadeOutputDto } from './client-adm.facade.interface';
import UseCaseInterface from '../../@shared/usecase/usecase.interface';

export interface UseCaseProps {
  findUsecase: UseCaseInterface;
  addUsecase: UseCaseInterface;
}
export default class ClientAdmFacade implements ClientAdmFacadeInterface {

    private _findUsecase: UseCaseInterface;
    private _addUsecase: UseCaseInterface;

    constructor(useCaseProps: UseCaseProps) {
        this._findUsecase = useCaseProps.findUsecase;
        this._addUsecase = useCaseProps.addUsecase;
    }

    async add(input: AddClientFacadeInputDto): Promise<void> {
        await this._addUsecase.execute(input);
    }
    async find(input: FindClientFacadeInputDto): Promise<FindClientFacadeOutputDto> {
        return await this._findUsecase.execute(input);
    }
    
}