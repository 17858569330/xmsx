
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '员工',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'name',
        name: "{{name_77b424b2_isk2}}",
        binding: 'name',
        updateOn: 'blur',
        defaultI18nValue: '名称',
    })
    name: FormControl;

    @NgFormControl({
        id: 'code',
        name: "{{code_95ef2878_ewnw}}",
        binding: 'code',
        updateOn: 'blur',
        defaultI18nValue: '编号',
    })
    code: FormControl;

    @NgFormControl({
        id: 'merchant',
        name: "{{merchant_91fbe3b1_be3q}}",
        binding: 'merchant',
        updateOn: 'blur',
        defaultI18nValue: '商户',
    })
    merchant: FormControl;

}