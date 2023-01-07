import FindProductUsecase from '../usecase/find-product/find-product.usecase';
import FindAllProductsUsecase from '../usecase/find-all-products/find-all-products.usecase';
import ProductRepository from '../repository/product.repository';
import StoreCatalogFacade from '../facade/store-catalog.facade';
export default class StoreCatalogFacadeFactory {

    static create(): StoreCatalogFacade {
        const productRepository = new ProductRepository();
        const findUseCase = new FindProductUsecase(productRepository);
        const findAllUseCase = new FindAllProductsUsecase(productRepository);

        const facade = new StoreCatalogFacade({
            findUseCase: findUseCase,
            findAllUseCase: findAllUseCase,
        });
        return facade;
    }
}