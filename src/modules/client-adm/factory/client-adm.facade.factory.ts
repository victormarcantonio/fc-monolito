import FindClientUseCase from '../usecase/find-client/find-client.usecase';
import AddClientUseCase from '../usecase/add-client/add-client.usecase';
import ClientAdmFacade from '../facade/client-adm.facade';
import ClientRepository from '../repository/client.repository';
export default class ClientAdmFacadeFactory {

    static create() {
        const repository = new ClientRepository();
        const findUsecase = new FindClientUseCase(repository);
        const addUsecase = new AddClientUseCase(repository);
        const facade = new ClientAdmFacade({
            addUsecase: addUsecase,
            findUsecase: findUsecase,
        });

        return facade;
    }
}