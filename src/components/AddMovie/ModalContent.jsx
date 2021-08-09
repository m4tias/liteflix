import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { moviesAPI } from '../../api';
import Button from '../Button';
import Logo from '../Logo';
import Icons from '../Icons';
import * as Styled from './styles';

export default function ModalContent({ close }) {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPosting, setIsPosting] = useState(false);

  async function onDrop(el) {
    setIsUploading(true);
    const data = await moviesAPI.postMovieImg(el[0], (progress) =>
      setProgress(Math.round((100 * progress.loaded) / progress.total))
    );
    setImg(data.img);
  }

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop,
  });

  async function uploadMovie() {
    setIsPosting(true);
    await moviesAPI.postMovie({ title, img });
    setIsPosting('POSTED');
  }

  const canIUploadMyMovie = !(title && progress === 100 && !isPosting);

  return (
    <>
      <Styled.CloseCross onClick={close}>
        <span />
        <span />
      </Styled.CloseCross>

      <Styled.AnimatedContainer
        className={isPosting === 'POSTED' ? '' : 'visible'}
      >
        <Styled.ModalTitle>AGREGAR UNA PELÍCULA</Styled.ModalTitle>
        <Styled.FileDropper
          {...getRootProps({ refKey: 'innerRef' })}
          className={isUploading ? 'uploading' : ''}
        >
          <input {...getInputProps()} />
          <Icons icon="clip" />
          <span>AGREGÁ UN ARCHIVO</span>
        </Styled.FileDropper>
        {isUploading && (
          <Styled.Progress>
            <Styled.ProgressPercentage>
              {progress < 100 ? (
                <>
                  CARGANDO <b>{progress}%</b>
                </>
              ) : (
                <b>100% CARGADO</b>
              )}
            </Styled.ProgressPercentage>
            <Styled.ProgressBar progress={progress} />
            <Styled.ButtonContainer>
              {progress < 100 ? (
                <Styled.CancelButton>CANCELAR</Styled.CancelButton>
              ) : (
                <>¡LISTO!</>
              )}
            </Styled.ButtonContainer>
          </Styled.Progress>
        )}
        <Styled.Input
          type="text"
          placeholder="TÍTULO"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Styled.ButtonsContainer>
          <Button primary disabled={canIUploadMyMovie} onClick={uploadMovie}>
            subir película
          </Button>
          <Button secondary onClick={close}>
            salir
          </Button>
        </Styled.ButtonsContainer>{' '}
      </Styled.AnimatedContainer>

      <Styled.AnimatedContainer
        className={isPosting === 'POSTED' ? 'visible' : ''}
      >
        <Styled.LogoContainer>
          <Logo />
        </Styled.LogoContainer>
        <Styled.Congrats>
          <h1>¡FELICITACIONES!</h1>
          <h2>{title} fue subido correctamente</h2>
        </Styled.Congrats>
        <Styled.ButtonsContainer>
          <Button primary onClick={close}>
            ir a home
          </Button>
        </Styled.ButtonsContainer>
      </Styled.AnimatedContainer>
    </>
  );
}

ModalContent.propTypes = {
  close: PropTypes.func.isRequired,
};
