(function(){
	'use strict';
	
	CKEDITOR.plugins.add( 'divclearboth', {
		lang: 'cs,en',
	    icons: 'divclearboth',
	    onLoad: function () {
	    	CKEDITOR.addCss( '.cke_show_divclearboth div { border:none;border-top:1px dotted #000; }' );
	    },
	    init: function( editor ) {
	        var divclearbothCmd = {
				canUndo: true,
				exec: function(editor){
					var brcl = editor.document.createElement('div', {attributes: {style: 'clear:both;height:0'}});
					editor.insertElement(brcl);
				}
			};
	        editor.addCommand( 'divclearboth', divclearbothCmd );
	        editor.ui.addButton( 'divclearboth', {
			    label: editor.lang.divclearboth.insert,
			    command: 'divclearboth',
			    toolbar: 'insert'
			});
			
			editor.addCommand( 'divclearbothshow', {
			    canUndo: false,
			    exec: function( editor ) {
			    	this.toggleState();
					this.refresh( editor );
			    },
			    refresh: function( editor ) {
					if ( editor.document ) {
						var showHrs = ( this.state == CKEDITOR.TRISTATE_ON && ( editor.elementMode != CKEDITOR.ELEMENT_MODE_INLINE || editor.focusManager.hasFocus ) );
		
						var funcName = showHrs ? 'attachClass' : 'removeClass';
						editor.editable()[ funcName ]( 'cke_show_divclearboth' );
					}
				}
			});
			
	        editor.ui.addButton( 'divclearbothshow', {
			    label: editor.lang.divclearboth.show,
			    command: 'divclearbothshow',
			    icon: 'plugins/divclearboth/icons/divclearbothshow.png',
			    toolbar: 'insert'
			});
	    }
	} );
})();
