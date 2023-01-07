import UseCaseInterface from '../../../@shared/usecase/usecase.interface';
import ProductRepository from '../../../product-adm/repository/product.repository';
import ProductGateway from '../../gateway/product.gateway';
import { FindAllProductsDto } from './find-all-products.dto';
export default class FindAllProductsUsecase implements UseCaseInterface {


    constructor(private productRepository: ProductGateway) {}

    async execute(): Promise<FindAllProductsDto> {
       const products = await this.productRepository.findAll();

       return {
        products: products.map((product)=> ({
            id: product.id.id,
            name: product.name,
            description: product.description,
            salesPrice: product.salesPrice
        })),
       };
    }
}