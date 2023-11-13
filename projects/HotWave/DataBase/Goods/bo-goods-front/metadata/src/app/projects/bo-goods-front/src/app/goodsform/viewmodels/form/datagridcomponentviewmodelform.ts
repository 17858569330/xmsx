
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '商品',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'goodsName',
        name: "{{goodsName_f5c45c50_xevr}}",
        binding: 'goodsName',
        updateOn: 'blur',
        defaultI18nValue: '商品名称',
    })
    goodsName: FormControl;

    @NgFormControl({
        id: 'goodsCode',
        name: "{{goodsCode_68f83985_nuka}}",
        binding: 'goodsCode',
        updateOn: 'blur',
        defaultI18nValue: '商品编号',
    })
    goodsCode: FormControl;

}