
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '商户',
    enableValidate: false
})

@Injectable()
export class TreeGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'merchantName',
        name: "{{merchantName_c80a3305_atir}}",
        binding: 'merchantName',
        updateOn: 'blur',
        defaultI18nValue: '商户名称',
    })
    merchantName: FormControl;

    @NgFormControl({
        id: 'merchantCode',
        name: "{{merchantCode_decf103d_nbo2}}",
        binding: 'merchantCode',
        updateOn: 'blur',
        defaultI18nValue: '商户编号',
    })
    merchantCode: FormControl;

}