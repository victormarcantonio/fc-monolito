import UseCaseInterface from '../../@shared/usecase/usecase.interface';
import ProductAdmFacadeInterface, { AddProductFacadeInputDto, CheckStockFacadeInputDto, CheckStockFacadeOutputDto } from './product-adm.facade.interface';

export interface UseCaseProps {
    addUseCase: UseCaseInterface;
    checkStockUsecase: UseCaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {

    private _addUsecase: UseCaseInterface;
    private _checkStockUsecase: UseCaseInterface;

    constructor (usecasesProps: UseCaseProps) {
      this._addUsecase = usecasesProps.addUseCase;
      this._checkStockUsecase = usecasesProps.checkStockUsecase;
    }
    addProduct(input: AddProductFacadeInputDto): Promise<void> {
        return this._addUsecase.execute(input);
    }
    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto> {
        return this._checkStockUsecase.execute(input); 
    }
    
}