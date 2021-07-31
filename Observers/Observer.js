// Definição de classe para observer
class Observer 
{
    /**
     * A cada instância da classe Observer
     * inicializa um array vazio de observadores
     * reativos a mudança de estado
     */
    constructor()
    {
        this.observers = []
    }

    /**
     * Método responsável por inscrever um novo objeto/elemento DOM
     * ao array de observadores
     * 
     * @param {*} fn 
     */
    subscribe(fn)
    {
        this.observers.push(fn)
    }

    /**
     * Método responsável por remover inscrição de objeto/elemento DOM
     * do array de observadores
     * 
     * @param {*} fn 
     */
    unsubscribe(fn)
    {
        this.observers = this.observers.filter(observer => observer !== fn)
    }

    /**
     * Método responsável por atualizar todos os objetos/elementos DOM
     * adicionados ao array de observadores
     * 
     * @param {*} payload 
     */
    notify({payload})
    {
        this.observers.forEach(observer => observer(payload))
    }
}