describe('first test', () =>{
    let testvariable:any;

    beforeEach(()=>{
        testvariable={};
    })

    it('should return true if a is true', ()=>{
        testvariable.a= false;

        testvariable.a= true;

        expect(testvariable.a).toBe(true);
    })
});