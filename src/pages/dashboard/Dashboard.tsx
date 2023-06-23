
import { BarraDeFerramenta } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

    return (
        <LayoutBaseDePagina 
        titulo='Página inicial' 
        barraDeFerramentas={(
            <BarraDeFerramenta />

            
        )} 
        children={undefined}></LayoutBaseDePagina>
    );
};